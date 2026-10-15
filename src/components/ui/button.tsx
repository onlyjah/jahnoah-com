import type { ComponentProps } from 'react'
import { Button as SharedButton } from '@onlyjah/ui/ui/button'
export function Button({className='',variant='default',...props}:ComponentProps<typeof SharedButton>){
 return <SharedButton {...props} variant={variant} className={`ui-button ${variant==='outline'?'ui-button-outline':''} ${className}`} />
}
