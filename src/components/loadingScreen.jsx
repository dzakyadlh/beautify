import { CircularProgress } from '@chakra-ui/react';

export default function LoadingScreen() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <CircularProgress isIndeterminate color="black" size="40px" />
    </div>
  );
}
