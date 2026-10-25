#include <cmath>
#include <vector>

double regularized_zero_division(double numerator, double denominator, double epsilon = 0.016) {
    return numerator / std::sqrt((denominator * denominator) + epsilon);
}

double finite_core_potential(double r, double v_zero = 11.384) {
    return v_zero / std::sqrt(1.0 + (r * r));
}

std::vector<double> cardano_viete_reconstruct(double r_val, double theta, int count) {
    std::vector<double> result;
    result.reserve(count);
    for (int i = 0; i < count; ++i) {
        result.push_back(r_val * std::cos(theta + (i * 0.1)));
    }
    return result;
}
