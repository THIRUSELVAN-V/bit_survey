import { Tab, Tabs, cn } from '@heroui/react';
import type React from 'react';
interface TabBarProps {
    id?: string;
    tabs?: {
        id?: string;
        icon?: React.ReactNode;
        label?: string;
        content?: React.ReactNode;
    }[]; // Array of tab objects with icon, label, and content.
    activeTab: string; // Currently active tab ID.
    setActiveTab: (tabId: string) => void; // Function to change active tab.
    color?: 'primary' | 'secondary'; // Optional color for tab.
    variant?: 'solid' | 'underlined' | 'bordered' | 'light'; // Optional variant for tab style.
    isMark?: boolean;
    isMarkfunction?: () => void;
    className?: string;
    tabClassName?: string;
    tablistClassName?: string;
    tabLabelClassName?: string;
}
export const TabBar = ({
    id,
    tabs,
    activeTab,
    setActiveTab,
    color = 'primary', // Default color.
    variant = 'underlined', // Default variant.
    className,
    tabClassName,
    tablistClassName,
    tabLabelClassName,
}: TabBarProps) => {
    return (
        <div
            id={id}
            className={cn('flex flex-col h-full relative overflow-hidden', className)}
            key={id}
        >
            <Tabs
                id={id}
                classNames={{
                    tabList: cn(
                        'gap-6 w-full rounded-t px-4 pb-0 border-b border-divider ',
                        tablistClassName,
                    ),
                    panel: 'overflow-auto',
                    cursor: 'w-full bg-primary-500',
                    tab: 'max-w-fit px-0 h-12',
                }}
                color="primary"
                variant={variant}
                selectedKey={activeTab}
                onSelectionChange={(key) => setActiveTab(key as string)}
            >
                {tabs?.map((item) => (
                    <Tab
                        key={item?.id} // Unique key for each tab.
                        id={item?.id}
                        title={
                            <div
                                className={cn(
                                    'flex items-center space-x-2 ',
                                    tabLabelClassName,
                                )}
                            >
                                {item?.icon}
                                <p
                                    className={cn(
                                        'text-body2 leading-6 font-source',
                                        'font-regular mb-[0.313rem]',
                                        activeTab === item?.id ? 'font-semibold text-primary-500' : 'text-gray-500' // Apply color
                                    )}
                                >
                                    {item?.label}
                                </p>

                            </div>
                        }
                        className={cn('h-full pt-4', tabClassName)}
                    >
                    </Tab>
                ))}
            </Tabs>
        </div>
    );
};