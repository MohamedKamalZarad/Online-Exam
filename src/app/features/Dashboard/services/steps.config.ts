export interface Step {
  label: string;
  route: string;
}

export const STEPS: Step[] = [
  { label: 'Home', route: '/home' },
  { label: 'Exams', route: '/exams' },
  { label: 'Quiz', route: '/quiz' },       // لاحظ هنا هنضيف id ديناميكي
  { label: 'Questions', route: '/questions' },
  { label: 'Account', route: '/profile' },
];
