export interface TelemetrySnapshot {
  timestamp: string;
  momentum: number | null;
  intensity: number | null;
  status: 'stable' | 'warning' | 'critical' | string;
  rawImageUrl?: string;
}

export type StatusEnum = TelemetrySnapshot['status'];
