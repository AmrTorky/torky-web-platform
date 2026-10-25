class TorkyBrowserEngine {
    constructor() {
        this.wasmModule = null;
        this.gpuDevice = null;
    }

    async initialize() {
        console.log("[TorkyEngine] Initializing WebAssembly & WebGPU Bridge...");
        if (navigator.gpu) {
            const adapter = await navigator.gpu.requestAdapter();
            if (adapter) {
                this.gpuDevice = await adapter.requestDevice();
                console.log("   ✓ WebGPU Compute Device Initialized");
            }
        }
        if (window.TorkyEngineModule) {
            this.wasmModule = await window.TorkyEngineModule();
            console.log("   ✓ WebAssembly C++ Core Engine Loaded");
        }
    }
}
window.TorkyBrowserEngine = TorkyBrowserEngine;
