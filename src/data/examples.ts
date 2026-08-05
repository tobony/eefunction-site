export interface EngineeringExample {
  title: string;
  titleKo: string;
  category: string;
  description: string;
  functions: string[];
  difficulty: 'Basic' | 'Intermediate' | 'Advanced';
  edition: 'Free' | 'Pro';
  status: 'official-preview' | 'planned';
}

export const engineeringExamples: EngineeringExample[] = [
  {
    title: 'Steam Pipe Pressure Drop',
    titleKo: '증기 배관 압력강하',
    category: 'Steam & Energy',
    description: '압력과 온도 조건에서 증기 물성을 계산하고 배관 압력강하 검토 흐름을 구성하는 예제입니다.',
    functions: ['ee.STEAM_RHO_PT', 'ee.STEAM_H_PT', 'ee.CONVERT'],
    difficulty: 'Intermediate',
    edition: 'Pro',
    status: 'official-preview',
  },
  {
    title: 'Humid Air State Calculation',
    titleKo: '습공기 상태량 계산',
    category: 'HVAC',
    description: '건구온도와 상대습도를 기준으로 습공기 주요 상태량을 한 워크시트에서 비교하는 예제입니다.',
    functions: ['ee.HA_W_T_RH', 'ee.HA_H_T_RH', 'ee.HA_TDP_T_RH'],
    difficulty: 'Basic',
    edition: 'Free',
    status: 'planned',
  },
  {
    title: 'Natural Gas Heating Value',
    titleKo: '천연가스 발열량 계산',
    category: 'Natural Gas',
    description: '가스 조성 데이터를 기반으로 발열량과 주요 혼합물 특성을 검토하는 실무형 예제입니다.',
    functions: ['ee.NG_HHV', 'ee.NG_LHV', 'ee.NG_MW'],
    difficulty: 'Advanced',
    edition: 'Pro',
    status: 'planned',
  },
];
