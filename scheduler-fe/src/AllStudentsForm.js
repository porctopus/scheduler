import React from 'react';
import { Button, Checkbox, Icon, Table } from 'semantic-ui-react';
import { Segment } from 'semantic-ui-react'


const AllStudentsForm = ({
  handleRowClick,
  onChange,
  handleCheckChange,
  errors,
  students,
  checkValue,
  handleEditClick
 }) => (
   <div>

     <Segment raised>
       <Table collapsing compact celled definition>
         <Table.Header>
           <Table.Row>
             <Table.HeaderCell />
             <Table.HeaderCell>First Name</Table.HeaderCell>
             <Table.HeaderCell>Last Name</Table.HeaderCell>
           </Table.Row>
         </Table.Header>


         <Table.Body>
           {students.map(student => <Table.Row key={student.student_id} onClick = {handleRowClick.bind(this, student)}>
             <Table.Cell collapsing>
               <Checkbox
                 name='checkboxGroup'
                 value={student.student_id}
                 checked={checkValue === student.student_id}
                 onChange={handleCheckChange}/>
             </Table.Cell>
             <Table.Cell
               children = {student.fname}>
             </Table.Cell>
             <Table.Cell
               children = {student.lname}>
             </Table.Cell>
           </Table.Row>)}
         </Table.Body>

         <Table.Footer fullWidth>
           <Table.Row>
             <Table.HeaderCell />
             <Table.HeaderCell colSpan='4'>
               <Button
                 icon
                 labelPosition='left'
                 primary
                 size='small'
                 onClick = {handleEditClick}>
                 <Icon name='user' /> Edit User
               </Button>
             </Table.HeaderCell>
           </Table.Row>
         </Table.Footer>
       </Table>
     </Segment>
   </div>
     )

     export default AllStudentsForm;
