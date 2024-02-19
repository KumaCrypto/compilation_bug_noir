const { compile, createFileManager } = require("@noir-lang/noir_wasm");
const { resolve } = require("path");

async function getCircuit(basePath) {
    const fm = createFileManager(basePath);
    const compiled = await compile(fm);
    if (!("program" in compiled)) {
        throw new Error("Compilation failed");
    }
    return compiled.program;
}


async function main() {
    const basePath = resolve("circuits-noir");
    await getCircuit(basePath);
}

main().catch((e) => {
    console.error(e);
    process.exit(1);
})