import React from 'react';

interface GeometricStarProps {
  className?: string;
  size?: number;
  color?: string;
}

export const GeometricStar: React.FC<GeometricStarProps> = ({
  className = '',
  size = 80,
  color = '#B8FF00'
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {/* Signature 8-point geometric star inspired by the reference design */}
      <path
        d="M50 0L54.5 35.5L90 14.6L69.1 50L90 85.4L54.5 64.5L50 100L45.5 64.5L10 85.4L30.9 50L10 14.6L45.5 35.5L50 0Z"
        stroke={color}
        strokeWidth="3.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
};
