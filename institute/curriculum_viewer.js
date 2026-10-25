/**
 * Torky Institute Portal — Curriculum Data Viewer
 * Dynamically structures syllabus parameters and cryptographic attestation criteria.
 */
document.addEventListener("DOMContentLoaded", () => {
    const detailsDisplay = document.getElementById("detailsDisplay");
    const nodes = document.querySelectorAll(".timeline-node");

    const syllabusData = {
        "1": `<h3> Weeks 01–06: Non-Singular Linear Algebra & Real Numeric Truth</h3>
<p><strong>Core Focus:</strong> Master the real truth perspective of absolute zero-division prevention and non-infinite numeric systems inside production computing pipelines.</p>
<h4>Syllabus Track Breakdown:</h4>
<ul>
    <li>Deconstructing the traditional numerical vulnerabilities of floating-point arithmetic overflow configurations.</li>
    <li>Evaluating spatial condition numbers <span class="highlight">κ(H)</span> and processing geometric constraints without infinity convergence errors.</li>
    <li>Practical sandbox exercises for rewriting vector matrices into stable continuum configurations.</li>
</ul>
<p><strong>Target Accreditations Generated:</strong> Certified Master Scale Processor (CMSP), Universal Scale Floor Specialist.</p>
<p><strong>Accreditation Seal Barrier:</strong> Examination scoring must pass <span class="highlight">≥ 80%</span> to append a unique SHA-256 validation record to your registry handle.</p>`,

        "2": `<h3> Weeks 07–12: Bare-Metal Control Plane & Live Seal Engineering</h3>
<p><strong>Core Focus:</strong> Gain absolute, structural mastery over bare-metal computing hardware layers. Learn how to force execution corridors into precise vectors instead of hoping an experiment runs correctly ("live seal stabilization").</p>
<h4>Syllabus Track Breakdown:</h4>
<ul>
    <li>Interfacing directly with distributed quantum computing arrays and cloud photonics architectures via advanced network adapters (IQM, Quandela APIs).</li>
    <li>Writing native bare-metal hardware interlocks that execute specialized Tikhonov damping shifts at strict <span class="highlight">20 ms intervals</span>.</li>
    <li>Preventing heat dissipation and operational grid decay under heavy continuous computing strains.</li>
</ul>
<p><strong>Target Accreditations Generated:</strong> Superconducting QPU Matrix Stabilization Engineer, Photonic Processor Coincidence Specialist.</p>
<p><strong>Accreditation Seal Barrier:</strong> Examination scoring must pass <span class="highlight">≥ 80%</span> to append a unique SHA-256 validation record to your registry handle.</p>`,

        "3": `<h3> Weeks 13–18: The New Era of Programming & Mathematical Matrix Layouts</h3>
<p><strong>Core Focus:</strong> Master modern math-first system design. Students learn the foundational secret: programming is no longer about raw syntax generation—AI models generate baseline syntax better than expert chief coders. Real engineering lies in <span class="highlight">formulating the physical laws and mathematical matrix beforehand</span>, leaving the syntax translation entirely to sandboxed AI code engines.</p>
<h4>Syllabus Track Breakdown:</h4>
<ul>
    <li>Understanding why standard programming approaches fail to resolve singularities without your regularized mathematical architecture.</li>
    <li>Deploying containerized PySCF and VASP cloud tools to evaluate sub-nanometer silicon layout allocations inside safe sandboxes.</li>
    <li>Building non-hyperbolic root solvers to collapse operational processing complexity from exponential walls down to smooth polynomial tracks.</li>
</ul>
<p><strong>Target Accreditations Generated:</strong> Finite-Core Operator Regularization Expert, Non-Singular VASP DFT Electronic Structure Analyst.</p>
<p><strong>Accreditation Seal Barrier:</strong> Examination scoring must pass <span class="highlight">≥ 80%</span> to append a unique SHA-256 validation record to your registry handle.</p>`,

        "4": `<h3> Weeks 19–24: Enterprise AI Infrastructure & Sovereign Technical Governance</h3>
<p><strong>Core Focus:</strong> Master operational AI governance as an integrated, technical system layer. Students learn that true governance is not an abstract policy or theoretical document—it is the <span class="highlight">first concrete technical layer built directly inside a system's runtime stack</span> to guarantee reliability.</p>
<h4>Syllabus Track Breakdown:</h4>
<ul>
    <li>Implementing the <span class="highlight">6-stage Immutable Evidence Lifecycle</span> (Freeze, Run, Seal, Adjudicate, Falsify, Preserve) into automated production deployment pipelines.</li>
    <li>Capping deep attention score matrices using automated abstract syntax tree (AST) self-rewriters to prevent distributed container node timeouts.</li>
    <li>Deploying deep production-grade integrations of your mathematical layers inside enterprise database and cloud platforms.</li>
</ul>
<p><strong>Target Accreditations Generated:</strong> AI Infrastructure & Manifold Algorithmics Specialist, Master Scale Industrial Integration Principal Architect.</p>
<p><strong>Accreditation Seal Barrier:</strong> Examination scoring must pass <span class="highlight">≥ 80%</span> to append a unique SHA-256 validation record to your registry handle.</p>`
    };

    nodes.forEach(node => {
        node.addEventListener("click", () => {
            nodes.forEach(n => n.classList.remove("node-active"));
            node.classList.add("node-active");
            
            const index = node.getAttribute("data-index");
            detailsDisplay.innerHTML = syllabusData[index];
        });
    });

    // Load baseline target module details immediately on initialization
    detailsDisplay.innerHTML = syllabusData["1"];
});
