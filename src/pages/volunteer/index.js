import { useState } from 'react';
import {
  Button,
  Center,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  GridItem,
  Heading,
  Input,
  Text,
  Textarea,
  useToast,
} from '@chakra-ui/react';
import { sendVolunteerForm } from '../../lib/api';
import PageContainer from '../../components/PageContainer';
import PageTextBox from '../../components/PageTextBox';
import FormContainer from '../../components/FormContainer';
import ContactButton from '../../components/ContactButton';

const initValues = {
  name: '',
  email: '',
  phone: '',
  tshirt_size: '',
  message: '',
};
const initState = { isLoading: false, error: '', values: initValues };

const Volunteer = () => {
  const toast = useToast();
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});
  const { values, isLoading, error } = state;

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendVolunteerForm(values);
      setTouched({});
      setState(initState);
      toast({
        title: 'Volunteer message sent.',
        status: 'success',
        duration: 2000,
        position: 'top',
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

  return (
    <PageContainer heading={'Volunteer'}>
      <PageTextBox>
        The Bridgetown Fest depends on a community of volunteers to take
        tickets, pour beers, and sell merch! If you would like to volunteer,
        please let us know which available slot below you would like. Volunteers
        get a festival pass, festival shirt, and two drinks tickets.
      </PageTextBox>
      {error && (
        <Text color='red.300' my={4} fontSize='xl'>
          {error}
        </Text>
      )}
      <FormContainer>
        <FormControl isRequired isInvalid={touched.name && !values.name} mb={5}>
          <FormLabel>Name</FormLabel>
          <Input
            type='text'
            name='name'
            errorBorderColor='red.300'
            value={values.name}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>

        <FormControl
          isRequired
          isInvalid={touched.email && !values.email}
          mb={5}
        >
          <FormLabel>Email</FormLabel>
          <Input
            type='email'
            name='email'
            errorBorderColor='red.300'
            value={values.email}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>

        <FormControl
          mb={5}
          isRequired
          isInvalid={touched.phone && !values.phone}
        >
          <FormLabel>Phone Number</FormLabel>
          <Input
            type='number'
            name='phone'
            errorBorderColor='red.300'
            value={values.phone}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>

        <FormControl
          mb={5}
          isRequired
          isInvalid={touched.tshirt_size && !values.tshirt_size}
        >
          <FormLabel>T-shirt Size</FormLabel>
          <Input
            type='text'
            name='tshirt_size'
            errorBorderColor='red.300'
            value={values.tshirt_size}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>

        <GridItem colSpan={2}>
          <FormControl
            isRequired
            isInvalid={touched.message && !values.message}
            mb={5}
          >
            <FormLabel>Message</FormLabel>
            <Textarea
              type='text'
              name='message'
              rows={4}
              errorBorderColor='red.300'
              value={values.message}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>Field Required - please revisit</FormErrorMessage>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <Center>
            <ContactButton
              isLoading={isLoading}
              disabled={
                !values.name ||
                !values.email ||
                !values.phone ||
                !values.tshirt_size ||
                !values.message
              }
              onClick={onSubmit}
            >
              Send Message to BBFF Volunteer Crew
            </ContactButton>
          </Center>
        </GridItem>
      </FormContainer>
    </PageContainer>
  );
};

export default Volunteer;
