/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */

import React, { useContext } from 'react';

import { DndEntryState,FileEntryProps } from '../../types/file-list.types';
import { ChonkyIconContext } from '../../util/icon-helper';
import { c, makeLocalChonkyStyles } from '../../util/styles';
import { useDndIcon,useFileEntryState } from './FileEntry-hooks';
import { FileEntryState, useCommonEntryStyles } from './GridEntryPreview';

export interface DnDIndicatorProps {
    className: string;
    dndState: DndEntryState;
}
interface StyleState {
    className:string,
    dndState: DndEntryState;
}

export const GridEntryDndIndicator: React.FC<FileEntryProps> = React.memo( ({ file,dndState,selected, focused}) => {
    //const { className: externalClassName, dndState } = props;
    const entryState: FileEntryState = useFileEntryState(file, selected, focused);
    const dndIconName = useDndIcon(dndState);
    const classes = useStyles(dndState);
    const ChonkyIcon = useContext(ChonkyIconContext);
    if (!dndIconName) return null;
    const className = c({
        [classes.dndIndicator]: true,
        // [externalClassName]: true,
    });
    return (
        <div className={className}>
            <ChonkyIcon  icon={dndIconName ?? entryState.icon}
                        spin={dndIconName ? false : entryState.iconSpin} file={file}/>
        </div>
    );
});

const useStyles = makeLocalChonkyStyles(theme => ({
    dndIndicator: {
        color: (dndState: DndEntryState) =>
            dndState.dndIsOver
                ? dndState.dndCanDrop
                    ? theme.dnd.canDropColor
                    : theme.dnd.cannotDropColor
                : '#000',
        boxSizing: 'border-box',
        position: 'absolute',
        fontSize: '1.2em',
        opacity: 0.6,
        padding: 6,
        '&:before': {
            borderBottom: '50px solid transparent',
            borderLeft: '50px solid #fff',
            position: 'absolute',
            content: '""',
            zIndex: -1,
            left: 0,
            top: 0,
        },
    },
}));
