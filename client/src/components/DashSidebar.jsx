import {Sidebar} from 'flowbite-react'
import {HiUser} from 'react-icons/hi'

export default function DashSidebar() {
  return (
    <Sidebar>
        <Sidebar.Items>
            <Sidebar.Group>
                <Sidebar.Item active icon={HiUser}>
                    
                </Sidebar.Item>
            </Sidebar.Group>
        </Sidebar.Items>
    </Sidebar>
  )
}
