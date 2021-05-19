function score(candidate, medicalExam, scoringGuide) {
  return new Scorer(candidate, medicalExam, scoringGuide).excute();
}

class Scorer {
  constructor(candidate) {
    this._candidate = candidate;
    this._medicalExam = medicalExam;
    this._scoringGuide = scoringGuide;
  }
  excute() {
    this._result = 0;
    this._healthLevel = 0;
    this._highMedicalRiskFlag = false;

    this.scoreSmoking();
    let certificationGrade = "regular";
    if (this._scoringGuide.stateWIthLowCerification(this._candidate.originState)) {
      certificationGrade = "low";
      this._result -= 5;
    }
    // 비슷한 코드 이어짐
    this._result -= Math.max(this._healthLevel - 5, 0);
    return this._result;
  }

  scoreSmoking() {
    if (this._medicalExam.isSmoker) {
      this._healthLevel += 10;
      this._highMedicalRiskFlag = true;
    }
  }
}
