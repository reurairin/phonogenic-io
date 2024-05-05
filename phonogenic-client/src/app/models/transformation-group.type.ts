import { PhonemeTransformation } from './phoneme-transformation.type';

export type TransformationGroup = {
  name: string;
  transformations: PhonemeTransformation[];
};
