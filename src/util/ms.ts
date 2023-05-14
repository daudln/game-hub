export default function ms(time: string): number {
  const units: Record<string, number> = {
    ms: 1,
    s: 1000,
    m: 60000,
    h: 3600000,
    d: 86400000,
    w: 604800000,
    mo: 2592000000, // 1 month is assumed to be 30 days
    y: 31536000000,
  };

  const match = time.match(/^(-?\d*\.?\d+)\s*([a-z]*)$/i);
  if (!match) {
    return NaN;
  }

  const value = parseFloat(match[1]);
  const unit = match[2].toLowerCase();

  if (!units.hasOwnProperty(unit)) {
    return NaN;
  }

  return value * units[unit];
}
