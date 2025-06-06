import { generateKeyPairSync } from "node:crypto";

console.log("🔑 Generating 2048-bit RSA key pair...");

const { privateKey, publicKey } = generateKeyPairSync("rsa", {
    modulusLength: 2048,
    publicKeyEncoding: {
        type: "spki",
        format: "pem",
    },
    privateKeyEncoding: {
        type: "pkcs8",
        format: "pem",
    },
});

// Convert keys to base64 for easy storage in .env
const privateKeyBase64 = Buffer.from(privateKey).toString("base64");
const publicKeyBase64 = Buffer.from(publicKey).toString("base64");

console.log("\n✅ Keys generated successfully!");
console.log(
    "\n📋 Copy the following lines into your .env file:\n"
);
console.log("=" .repeat(80));
console.log(`JWT_PRIVATE_KEY_BASE64="${privateKeyBase64}"`);
console.log(`JWT_PUBLIC_KEY_BASE64="${publicKeyBase64}"`);
console.log("=" .repeat(80));