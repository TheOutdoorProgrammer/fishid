'use client';

import React from 'react';
import {
  Home as HomeIcon,
  BookOpen as BookOpenIcon,
  RefreshCw as RefreshCwIcon,
  User as UserIcon,
  Heart as HeartIcon,
  Star as StarIcon,
  Flame as FlameIcon,
  Volume2 as Volume2Icon,
  VolumeX as VolumeXIcon,
  Lock as LockIcon,
  Unlock as UnlockIcon,
  X as XIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Check as CheckIcon,
  Fish as FishIcon,
  Award as AwardIcon,
} from 'lucide-react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export function Fish({ size = 24, ...props }: IconProps) {
  return <FishIcon size={size} {...props} />;
}

export function Award({ size = 24, ...props }: IconProps) {
  return <AwardIcon size={size} {...props} />;
}

export function Home({ size = 24, ...props }: IconProps) {
  return <HomeIcon size={size} {...props} />;
}

export function BookOpen({ size = 24, ...props }: IconProps) {
  return <BookOpenIcon size={size} {...props} />;
}

export function RefreshCw({ size = 24, ...props }: IconProps) {
  return <RefreshCwIcon size={size} {...props} />;
}

export function User({ size = 24, ...props }: IconProps) {
  return <UserIcon size={size} {...props} />;
}

export function Heart({ size = 24, ...props }: IconProps) {
  return <HeartIcon size={size} {...props} />;
}

export function Star({ size = 24, ...props }: IconProps) {
  return <StarIcon size={size} {...props} />;
}

export function Flame({ size = 24, ...props }: IconProps) {
  return <FlameIcon size={size} {...props} />;
}

export function Volume2({ size = 24, ...props }: IconProps) {
  return <Volume2Icon size={size} {...props} />;
}

export function VolumeX({ size = 24, ...props }: IconProps) {
  return <VolumeXIcon size={size} {...props} />;
}

export function Lock({ size = 24, ...props }: IconProps) {
  return <LockIcon size={size} {...props} />;
}

export function Unlock({ size = 24, ...props }: IconProps) {
  return <UnlockIcon size={size} {...props} />;
}

export function X({ size = 24, ...props }: IconProps) {
  return <XIcon size={size} {...props} />;
}

export function ChevronLeft({ size = 24, ...props }: IconProps) {
  return <ChevronLeftIcon size={size} {...props} />;
}

export function ChevronRight({ size = 24, ...props }: IconProps) {
  return <ChevronRightIcon size={size} {...props} />;
}

export function Check({ size = 24, ...props }: IconProps) {
  return <CheckIcon size={size} {...props} />;
}
