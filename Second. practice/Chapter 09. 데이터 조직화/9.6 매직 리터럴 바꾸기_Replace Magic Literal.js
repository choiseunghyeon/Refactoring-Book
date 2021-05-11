const STANDARD_GRAVITY = 9.81;
function potentialEnergy(mass, height) {
  return mass * STANDARD_GRAVITY * height;
}

function client() {
  if (isMale(aValue)) {
    return true;
  }
  return false;

  function isMale(value) {
    return value === "M";
  }
}
