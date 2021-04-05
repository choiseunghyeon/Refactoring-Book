function renderPerson(outStream, person) {
  const result = [];
  result.push(`<p>${person.name}</p>`);
  result.push(renderPhoto(person.photo));
  result.push(emitPhotoData(person));
  return result.join("\n");
}

function photoDiv(p) {
  return ["<div>", emitPhotoData(p), "</div>"].join("\n");
}

function emitPhotoData(aPhoto) {
  const result = [];
  result.push(`<p>위치: ${aPhoto.location}</p>`);
  result.push(`<p>위치: ${aPhoto.date.toDateString()}</p>`);
  return result.join("\n");
}

function emitPhotoData(p) {
  return [
    `<p>제목: ${p.title}</p>`, // 제목 출력
    `<p>위치: ${aPhoto.location}</p>`,
    `<p>위치: ${aPhoto.date.toDateString()}</p>`,
  ].join("\n");
}
