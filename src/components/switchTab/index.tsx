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
    normalTabColor?: string; // Custom color for normal (inactive) tabs.
    selectedTabColor?: string; // Custom color for selected (active) tabs.
    borderColor?: string;
}

export const TabBar = ({
    id,
    tabs,
    activeTab,
    setActiveTab,
    variant = 'underlined', // Default variant.
    className,
    tabClassName,
    tablistClassName,
    tabLabelClassName,
    normalTabColor = 'text-gray-500', // Default color for normal tabs.
    selectedTabColor = 'text-primary-500', // Default color for selected tabs.
    borderColor = 'bg-primary-500'
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
                    cursor: cn('w-full', borderColor),
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
                                        activeTab === item?.id ? selectedTabColor : normalTabColor // Apply custom colors
                                    )}
                                >
                                    {item?.label}
                                </p>
                            </div>
                        }
                        className={cn('h-full pt-4', tabClassName)}
                    >
                        {/* Render the content of the active tab */}
                        {activeTab === item?.id && item?.content}
                    </Tab>
                ))}
            </Tabs>
        </div>
    );
};