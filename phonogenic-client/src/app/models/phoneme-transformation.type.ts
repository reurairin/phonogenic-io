import { PhonemeTransformationConditions } from './phoneme-transformation-conditions.type';

export type PhonemeTransformation = {
  initialPhoneme: string;
  resultingPhoneme: string;
  transformationLikelihood: number;
  conditions: PhonemeTransformationConditions;
};
