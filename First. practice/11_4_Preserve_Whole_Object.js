function client() {
    const tempRange = aRoom.daysTempRange
    if (!aPlan.withinRange(tempRange)) {
        alerts.push("방 온도가 지정 범위를 벗어났습니다.")
    }
}

class HeatingPlan {
    withinRange(tempRange) {
        return (tempRange.low >= this._temperatureRange.low) && (tempRange.high <= this._temperatureRange.high);
    }
}

