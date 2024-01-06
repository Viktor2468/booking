'use client';

interface HeadingProps {
    title: string;
    subtitle?: string;
    center?: boolean;
}

const Heading = ({title, subtitle, center}) => {
    return (
        <div className={center? 'text-center' : 'text-start'}>
            <div className="text-2xl font-bold">
            {title}
            </div>
            <div className="font-lite text-neutral-500 mt-2">
                {subtitle}
            </div>
                
        </div>
    )
}

export default Heading;