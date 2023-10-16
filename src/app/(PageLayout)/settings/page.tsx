"use client"
import Main from "@/components/Layout/Main/page";
import { Box, Card, CardBody, CardHeader, Heading, Stack, StackDivider, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Button, Tooltip } from "@chakra-ui/react";
import { useEffect, useState } from "react";


const SettingsPage = () => {
  const [isUpdate,setIsupdate] = useState<boolean>(false)
  const [version,setVersion] = useState<string>('0.1.0')

  return (
    <Main>
      <Box className='w-full text-2xl font-bold text-blue-700 pb-6'>系统设置</Box>
      <Card className='mb-6'>
        <CardBody>
          <Stack divider={<StackDivider />} spacing='4'>
            <Box>
              <Heading className='mb-4' size='lg' textTransform='uppercase'>关于</Heading>
              <Box className='mb-4 flex'>
                当前版本：{version} 
                {isUpdate&&<Box w={'5px'} h={'5px'} bg={'myRead.600'} borderRadius={'20px'} />}
              </Box>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Main>
    
  )
};

export default SettingsPage;
