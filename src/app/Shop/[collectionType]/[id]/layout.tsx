
import '../../../globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Product details',
  description: 'Your app description',
};


export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      {children}
      <div id="modal-root" /> 
    </div>
  );
}
