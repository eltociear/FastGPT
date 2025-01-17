import type { RequestPaging } from '@/types';
import { TrainingModeEnum } from '@/constants/plugin';
import type { SearchTestItemType } from '@/types/core/dataset';
import { DatasetDataItemType } from '@/types/core/dataset/data';
import { DatasetCollectionSchemaType } from '@fastgpt/global/core/dataset/type';

/* ===== dataset ===== */

/* ======= collection =========== */

/* ==== data ===== */
export type PushDataResponse = {
  insertLen: number;
};
