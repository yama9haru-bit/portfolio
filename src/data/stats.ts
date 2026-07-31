export interface HeroStat {
  value: string;
  suffix?: string;
  label: string;
}

export const heroCopy = {
  eyebrow: 'AI × Automation Engineer',
  catch: 'AIで仕事を16倍速にする。',
  sub: '企画・調査から実装・運用まで、AIエージェントで一気通貫。8時間と言われた仕事を30分で納品した実績。',
};

// 制作物件数はハードコードしない — index.astroがprojects.lengthから渡す
export const heroStats: HeroStat[] = [
  { value: '16', suffix: 'x', label: '最大生産性' },
  { value: '15', suffix: '+', label: '自作AI Skill' },
];
