import { Nullable } from 'tsdef';

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
}
