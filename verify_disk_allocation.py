#!/usr/bin/env python3
"""
Scientist Amr Torky Platform — Disk Allocation Monitoring Matrix
Verifies file system storage capacities across operational sandbox roots.
"""
import shutil
import sys

def check_workspace_storage(target_path):
    print("=================================================================")
    print("---      STARTING BARE-METAL STORAGE MATRIX ALLOCATION TRACK   ---")
    print("=================================================================")
    
    try:
        # Retrieve disk storage statistics in bytes
        total, used, free = shutil.disk_usage(target_path)
        
        # Convert capacities to Gigabytes for optimal readability
        total_gb = total / (1024**3)
        used_gb = used / (1024**3)
        free_gb = free / (1024**3)
        utilization_rate = (used / total) * 100
        
        print(f"[STORAGE NODE]: Tracking Target Path : {target_path}")
        print(f"  ↳ Total Capacity Allocated  : {total_gb:.2f} GB")
        print(f"  ↳ Total Disk Space Utilized : {used_gb:.2f} GB")
        print(f"  ↳ Free Space Remaining      : {free_gb:.2f} GB")
        print(f"  ↳ Current Manifold Overhead : {utilization_rate:.2f}%")
        
        if utilization_rate > 90.0:
            print("\n  ⚠️ WARNING: STORAGE SPACE EXCEEDS STANDARD OVERHEAD LIMIT.")
            print("  Status Flag: RISK_OF_BACKUP_OVERFLOW")
        else:
            print("\n  ✓ Invariant Status Checklist: Storage volumes hold sufficient runway.")
            print("  Status Flag: NOMINAL_STORAGE_CAPACITY_CLEARED")
            
    except Exception as error_msg:
        print(f"  ❌ Storage validation loop exception encountered: {str(error_msg)}")
        sys.exit(1)
        
    print("=================================================================")
    print(" [SUCCESS] DISK RUNTIME ALLOCATION MAP COMPLETE                 ")
    print("=================================================================")

if __name__ == "__main__":
    import os
    workspace_root = os.path.expanduser("~/torky_independent_workspace")
    check_workspace_storage(workspace_root)
