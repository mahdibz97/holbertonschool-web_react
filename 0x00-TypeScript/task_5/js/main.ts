export interface MajorCredits {
  credit: number,
  brand: "MajorCredits"
}
export interface MinorCredits {
  credit: number,
  brand: "MinorCredits"
}

export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {credit: subject1.credit + subject2.credit, brand: "MajorCredits"};
}
export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): number {
  return (subject1.credit + subject2.credit);
}
