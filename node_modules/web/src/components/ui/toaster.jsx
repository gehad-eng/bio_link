import {
	Toast,
	ToastClose,
	ToastDescription,
	ToastProvider,
	ToastTitle,
	ToastViewport,
  ToastInfoIcon
} from '@/components/ui/toast';
import { useToast } from '@/components/ui/use-toast';
import React from 'react';

export function Toaster() {
	const { toasts } = useToast();

	return (
		<ToastProvider>
			{toasts.map(({ id, title, description, action, ...props }) => {
				return (
					<Toast key={id} {...props}>
            <div className="flex items-center gap-3"> {/* Changed items-start to items-center */}
              <ToastInfoIcon className="h-5 w-5 text-blue-500" /> {/* Removed mt-0.5 */}
  						<div className="grid gap-1">
  							{title && <ToastTitle>{title}</ToastTitle>}
  							{description && (
  								<ToastDescription>{description}</ToastDescription>
  							)}
  						</div>
            </div>
						{action}
						<ToastClose />
					</Toast>
				);
			})}
			<ToastViewport />
		</ToastProvider>
	);
}