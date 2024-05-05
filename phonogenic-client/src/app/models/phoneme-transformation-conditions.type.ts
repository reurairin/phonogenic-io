import { PhonemePosition } from './enums/phoneme-position.enum';
import { PhonemeStressing } from './enums/phoneme-stressing.enum';

export type PhonemeTransformationConditions = {
  position?: PhonemePosition | null;
  stressing?: PhonemeStressing | null;
  leftNeighborType?: string | null;
  leftNeighborList?: string[] | null;
  rightNeighborType?: string | null;
  rightNeighborList?: string[] | null;
  prevSyllable?: PhonemeStressing | null;
  nextSyllable?: PhonemeStressing | null;
};
