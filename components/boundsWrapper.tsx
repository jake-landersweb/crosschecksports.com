import React from "react"

const BoundsWrapper = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return <div className={`flex items-center justify-center ${className}`}>
        <div className="max-w-[1200px] px-4 lg:px-20 md:px-10 w-screen">
            {children}
        </div>
    </div>
}

export default BoundsWrapper