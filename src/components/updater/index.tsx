import { Modal, ModalBody, ModalHeader,Button, ModalOverlay, useDisclosure, Box, ModalContent, IconButton, ModalCloseButton, ModalFooter, Icon } from "@chakra-ui/react"
import React, { useEffect, useState } from "react"

import { Progress } from '@chakra-ui/react'
import { CheckIcon, WarningIcon } from "@chakra-ui/icons";
import { UpdaterStatus } from "@/types/updater.d";


let chunk:number = 0

/* 更新弹窗 */
export const Updater=()=>{
    const [silentUpdate,setSilentUpdate] = useState<boolean>(false)
    const [updaterInfo,setUpdaterInfo] = useState<any>()
    const [progressInfo,setProgressInfo] = useState<number>(0)
    const [updateStatus,setUpdateStatus] = useState<any>()
    const OverlayOne = () => (
        <ModalOverlay
          bg='blackAlpha.300'
          backdropFilter='blur(10px) hue-rotate(20deg)'
        />
    )

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<OverlayOne />)

    return (
        <>
            {/* <Button
                variant='link'
                colorScheme='teal'
                onClick={async () => {
                    setOverlay(<OverlayOne />)
                    console.warn('updateStatus--',updateStatus)
                    // onOpen()
                }}
            >检查更新</Button> */}
            <Modal size='xl' isCentered isOpen={isOpen} onClose={silentUpdate?onClose:()=>{}}>
                {/* {overlay} */}
                <ModalContent className='p-6 min-h-80'>
                    <ModalHeader className='flex items-center'>
                        {/* <IconButton
                            isRound={true}
                            variant='solid'
                            colorScheme='teal'
                            aria-label='Done'
                            icon={<CheckIcon />}
                            fontSize={12}
                            size='xs'
                            className='mr-2'
                        /> */}
                        <Icon fontSize={22} color='blue.500' className='mr-2' as={WarningIcon} />
                        {[UpdaterStatus.SILENT,UpdaterStatus.PROMPT,UpdaterStatus.ALREADY_UPDATE].includes(updateStatus)?updaterInfo?.title:
                        [UpdaterStatus.DOWNLOAD_PROGRESS].includes(updateStatus)?'版本更新中':
                        [UpdaterStatus.DOWNLOADED].includes(updateStatus)?'重新启动应用程序':''}
                    </ModalHeader>
                    {silentUpdate&&<ModalCloseButton />}
                    <ModalBody className='flex flex-col justify-items-center rounded-lg' whiteSpace={'pre-line'}>
                        {[UpdaterStatus.SILENT,UpdaterStatus.PROMPT,UpdaterStatus.ALREADY_UPDATE,UpdaterStatus.DOWNLOAD_PROGRESS].includes(updateStatus)?updaterInfo?.msg:
                        [UpdaterStatus.DOWNLOADED].includes(updateStatus)?'应用安装成功，立即重新启动应用程序！':''}
                        {[UpdaterStatus.DOWNLOAD_PROGRESS].includes(updateStatus)&&<Box className='box-border py-4'>
                            <Box>{Math.round(progressInfo)}%</Box>
                            <Progress className='mb-6 rounded-md' hasStripe value={progressInfo} />
                        </Box>}
                    </ModalBody>
                    <ModalFooter>
                        {[UpdaterStatus.SILENT,UpdaterStatus.PROMPT].includes(updateStatus)&&<Button mr={3} colorScheme='blue' >更新</Button>}
                        {[UpdaterStatus.DOWNLOADED].includes(updateStatus)&&<Button mr={3} colorScheme='blue' >重启</Button>}
                        {[UpdaterStatus.ALREADY_UPDATE].includes(updateStatus)&&<Button mr={3} colorScheme='blue' onClick={onClose}>确定</Button>}
                        {silentUpdate&&<Button onClick={onClose}>取消</Button>}
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}