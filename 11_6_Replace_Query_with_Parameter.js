// 참조 투명성 유지를 위해 (순수함수) - 같은 값을 건네면 매번 똑같은 결과를 내는 함수는 다루기 쉽다.

class HeatingPlan {
    get targetTemperature() {
        if (thermostate.selectedTemperature > this._max) return this._max;
        else if (thermostate.selectedTemperature < this._min) return this._min;
        else return thermostate.selectedTemperature;
    }
}

function client() {
    if (thePlan.targetTemperature > thermostate.currentTemperature) setToHeat();
    if (thePlan.targetTemperature < thermostate.currentTemperature) setToCool();
    else setOff();
}