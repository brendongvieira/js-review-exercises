// Create an algorithm that receives three scores from a student, calculates its average and shows the following messages accordingly:

// - If the average is equal or greater than 7 - Approved
// - If the average is greater and equal to 5 and less than 7 - Retake Test
// - If average is less than 5 - Failed

function calculateAverage(score1, score2, score3) {
  let averageGrade = (score1 + score2 + score3) / 3;

  if (averageGrade >= 7) {
    return "Approved";
  }

  if (averageGrade >= 5 && averageGrade < 7) {
    return "Retake Test";
  }

  if (averageGrade < 5) {
    return "Failed";
  }
}

console.log(calculateAverage(8, 5, 8));
