/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */

import React from 'react';

import { FileBrowserHandle, FileBrowserProps } from '../../types/file-browser.types';
import { FileList } from '../file-list/FileList';
import { FileBrowser } from './FileBrowser';
import { FileContextMenu } from './FileContextMenu';
import { FileNavbar } from './FileNavbar';
import { FileToolbar } from './FileToolbar';

export const FullFileBrowser = React.memo(
    React.forwardRef<FileBrowserHandle, FileBrowserProps>((props, ref) => {
        const { onScroll, fileListStyle, activeStar = <></>, deactivateStar = <></>, tags = <></>, sharedOrPrivate = {sharedText: "", privateText: ""} } = props;
        return (
            <FileBrowser ref={ref} {...props}>
                <FileNavbar />
                <FileToolbar />
                <FileList
                    onScroll={onScroll}
                    fileListStyle={fileListStyle}
                    activeStar={activeStar}
                    deactivateStar={deactivateStar}
                    tags={tags}
                    sharedOrPrivate={sharedOrPrivate}
                />
                <FileContextMenu />
            </FileBrowser>
        );
    })
);
FullFileBrowser.displayName = 'FullFileBrowser';
