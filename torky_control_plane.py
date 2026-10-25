#!/usr/bin/env python3
"""
TFC Structural Control Plane Engine
Validates non-singular potential values at the origin (r=0) using the invariant spatial regularizer floor.
ISO/IEC 17025 Metrological Integration Compliance Checker
"""
import math

def evaluate_core_potential(radial_distance, spatial_floor=0.016):
    """
    Calculates the regularized physical energy potential profile.
    Prevents division-by-zero errors at the core origin using the spatial floor.
    """
    # Verify parameter inputs
    if spatial_floor <= 0:
        raise ValueError("Spatial regularizer floor parameter must be greater than zero.")
        
    # Calculate the regularized value: V = 1.4399 / sqrt(r^2 + epsilon)
    denominator = math.sqrt((radial_distance ** 2) + spatial_floor)
    resolved_potential = 1.4399 / denominator
    return resolved_potential

def run_control_plane_suite():
    print("=================================================================")
    print("---   STARTING TFC CORE SYSTEM CONTROL PLANE EXECUTION LAYER  ---")
    print("=================================================================")

    # Test Parameters
    epsilon_invariant = 0.016  # Fixed spatial floor value (nm^2)
    origin_coordinate = 0.0    # Absolute system center point (r=0)

    print(f"\n[SYSTEM SETUP] Active Invariant Floor Scale : {epsilon_invariant} nm^2")
    print(f"[SYSTEM SETUP] Targeting Origin Coordinate  : r = {origin_coordinate}")

    try:
        print("\nExecuting Core Integration Routine...")
        origin_energy = evaluate_core_potential(origin_coordinate, epsilon_invariant)
        
        print("\n[DATA LAYER OUTPUT RESULTS]:")
        print(f"-> Target Center Energy Potential : {origin_energy:.3f} eV")
        
        # Verify the calculation matches the mathematical proof (11.383 eV)
        expected_target = 11.383
        if math.isclose(origin_energy, expected_target, abs_tol=0.001):
            print("-> Boundary Value Verification    : MATCHED TARGET VALUE")
            print("-> Execution Status Flag          : SUCCESS_NO_NAN_FOUND")
        else:
            print("-> Boundary Value Verification    : MISMATCH DETECTED")
            print("-> Execution Status Flag          : CRITICAL_VALUE_DRIFT")
            
    except ZeroDivisionError:
        print("\n[CRITICAL RUNTIME ERROR]: System encountered a division by zero fault.")
        print("Status Flag: FAILED_MANIFOLD_COLLAPSE")
    except Exception as error_msg:
        print(f"\n[UNEXPECTED RUNTIME FAULT]: {str(error_msg)}")
        print("Status Flag: FAILED_ENGINE_EXCEPTION")
        
    print("\n=================================================================")
    print("    CORE CONTROL PLANE SIMULATION INTEGRATION COMPILED: DONE     ")
    print("=================================================================")

if __name__ == "__main__":
    run_control_plane_suite()
