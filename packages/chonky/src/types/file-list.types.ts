import { Nullable } from 'tsdef';
import { ElementType, UIEvent, CSSProperties } from 'react';
import { FileData } from './file.types';

export interface DndEntryState {
    dndIsDragging?: boolean;
    dndIsOver?: boolean;
    dndCanDrop?: boolean;
}

export interface FileEntryProps {
    file: Nullable<FileData>;
    selected: boolean;
    focused: boolean;
    dndState: DndEntryState;
    activeStar?: React.ReactElement<any, any>;
    deactivateStar?: React.ReactElement<any, any>;
    tags?: React.ReactElement<any, any>;
    sharedOrPrivate?: {
        sharedText: string;
        privateText: string;
    };
    listHeader?: {
        name: string;
        location: string;
        modified:string;
        sharing:string;
    };
    rowClickHandler?: (e: UIEvent<HTMLDivElement>) => void;
}
