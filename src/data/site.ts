export const site = {
  name: 'eeFunction',
  company: 'BRBRSoft',
  description: 'Excel 안에서 사용하는 전문 엔지니어링 물성 계산 함수와 검증 가능한 계산 예제 플랫폼입니다.',
  url: 'https://eefunction.brbrsoft.com',
  docsUrl: 'https://eefunction-doc.pages.dev',
  githubUrl: 'https://github.com/tobony/eefunction-site',
  examplesRepositoryUrl: 'https://github.com/tobony/eefunction-examples',
  tutorialRepositoryUrl: 'https://github.com/tobony/eefunction-tutorial',
} as const;

export const navigation = [
  { label: 'Pro', href: '/pro' },
  { label: 'Examples', href: '/examples' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Security', href: '/security' },
] as const;
