#!/usr/bin/env bash
set -euo pipefail
echo "================================================================="
echo "   EXECUTING LOCAL FRONTEND GATEWAY INTEGRITY CHECKS            "
echo "================================================================="
cd "$(dirname "$0")"
python3 src/verify_gateway_node.py
echo "-----------------------------------------------------------------"
echo "✓ Frontend gateway check completed with nominal status."
echo "================================================================="
