export interface SemanticElementData {
  id: string;
  tag: string;
  title: string;
  description: string;
  code: string;
  colorClass: string;
  textColorClass: string;
  borderColorClass: string;
}

export interface TourStep {
  targetId: string;
  title: string;
  content: string;
  position: 'top' | 'bottom' | 'left' | 'right' | 'center';
}
