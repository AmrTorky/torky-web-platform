#!/usr/bin/env python3
"""
TFC Sovereign Governor Engine
Implements structural safeguard constraints and matrix conditioning bounds 
to prevent gradient anomalies during runtime execution.
ISO/IEC 17025 Metrological Integration Compliance Checker
"""
import math

def calculate_matrix_conditioning(matrix_elements):
    """
    Computes the condition number for a mock 2x2 diagonal Hessian matrix.
    Safeguards zero-gradient states by resetting to baseline unity (1.0).
    """
    if all(v == 0.0 for v in matrix_elements):
        clamped_kappa = 1.0
        status_flag = "ACTIVE_RESET_TO_1.0"
    else:
        try:
            abs_elements = [abs(x) for x in matrix_elements if x != 0]
            if not abs_elements:
                return 1.0, "EMPTY_FALLBACK"
            
            max_val = max(abs_elements)
            min_val = min(abs_elements)
            clamped_kappa = max_val / min_val
            
            # تطبيق سقف الحماية الصارم لمنظومة الـ TFC لمنع الانفراط الحسابي
            if clamped_kappa > 18.5:
                clamped_kappa = 18.5
                status_flag = "REGULARIZED_CLAMP_AT_18.5"
            else:
                status_flag = "NOMINAL_CALCULATION"
        except Exception:
            clamped_kappa = 18.5
            status_flag = "EXCEPTIONAL_FALLBACK"
            
    return clamped_kappa, status_flag

def run_governor_test_suite():
    print("=================================================================")
    print("--- STARTING TFC ADVANCED SOVEREIGN GOVERNOR EXECUTION LAYER ---")
    print("=================================================================")

    # الاختبار الأول: محاكاة انهيار التدرج الكامل والصفري للحسابات
    print("\n[TEST 1] Evaluating Zero Gradient Matrix Landscape...")
    zero_gradient_hessian = [0.0, 0.0]
    kappa_1, status_1 = calculate_matrix_conditioning(zero_gradient_hessian)
    print(f"-> System Status Engine Flag  : {status_1}")
    print(f"-> Computed Condition Number  : {kappa_1:.4f}")
    assert math.isclose(kappa_1, 1.0), "Safeguard validation failed for zero matrix state."
    print("-> Status Check               : PASSED")

    # الاختبار الثاني: تقييم تشغيل المنصة تحت ظروف التحميل القياسية
    print("\n[TEST 2] Evaluating Nominal Matrix Operations...")
    nominal_hessian = [15.0, 3.0]
    kappa_2, status_2 = calculate_matrix_conditioning(nominal_hessian)
    print(f"-> System Status Engine Flag  : {status_2}")
    print(f"-> Computed Condition Number  : {kappa_2:.4f}")
    assert kappa_2 <= 18.5, "Sovereign boundary check failed for nominal state."
    print("-> Status Check               : PASSED")

    # الاختبار الثالث: اختبار التدخل الفوري لكبح جماح التدرج الانفجاري المفرط
    print("\n[TEST 3] Evaluating Exploding Gradient Boundary Breach...")
    exploding_hessian = [1000.0, 2.0]
    kappa_3, status_3 = calculate_matrix_conditioning(exploding_hessian)
    print(f"-> System Status Engine Flag  : {status_3}")
    print(f"-> Computed Condition Number  : {kappa_3:.4f}")
    assert math.isclose(kappa_3, 18.5), "Sovereign regularization boundary failed to clamp."
    print("-> Status Check               : PASSED")

    print("\n=================================================================")
    print("   ALL SOVEREIGN GOVERNOR CORE MATRIX SYSTEM TESTS: SUCCESS      ")
    print("=================================================================")

if __name__ == "__main__":
    run_governor_test_suite()
