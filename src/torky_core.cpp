#include <cmath>
#include <vector>

double regularized_zero_division(double numerator, double denominator, double epsilon = 0.016) {
    return numerator / std::sqrt((denominator * denominator) + epsilon);
}

double finite_core_potential(double r, double v_zero = 11.384) {
    return v_zero / std::sqrt(1.0 + (r * r));
}
