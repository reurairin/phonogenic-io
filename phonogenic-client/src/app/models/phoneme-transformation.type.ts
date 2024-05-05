import { PhonemeTransformationConditions } from './phoneme-transformation-conditions.type';

export type PhonemeTransformation = {
  initialPhoneme: string;
  targetPhoneme: string;
  transformationLikelihood: number;
  conditions: PhonemeTransformationConditions;
};
