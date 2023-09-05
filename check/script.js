// -----------------消さない------------------------------------------------

"use strict";

function test(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("Yay! Test PASSED.");
  } else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
  console.trace();
  }
}


// ---------------------------------------------------------------------------



function disemvowel(str) {
  return str.replace(/[aeiou]/ig,"");
}

test(disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!");
test(disemvowel("No offense but,\nYour writing is among the worst I've ever read"), "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd");
test(disemvowel("What are you, a communist?"), "Wht r y,  cmmnst?");