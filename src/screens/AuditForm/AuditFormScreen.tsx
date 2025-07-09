import React, { useState } from 'react';
import { View, Text, Image, Alert, TouchableOpacity } from 'react-native';
import { useRoleContext, useAuditContext } from '../../context/RoleProvider';
import { launchCamera, launchImageLibrary, Asset, MediaType } from 'react-native-image-picker';
import { Button, TextInput, Loader } from '../../components';
import { ratingOptionsInit, checkboxOptions } from '../../utils/sampleData';
import {
  AUDIT_FORM_TITLE,
  AUDIT_FORM_STEP1,
  AUDIT_FORM_STEP2,
  AUDIT_FORM_STEP3,
  AUDIT_FORM_PLACEHOLDER,
  AUDIT_FORM_CAMERA,
  AUDIT_FORM_GALLERY,
  AUDIT_FORM_BACK,
  AUDIT_FORM_NEXT,
  AUDIT_FORM_SUBMIT,
  AUDIT_FORM_PROCESSING,
  AUDIT_FORM_ACCESS_DENIED,
  AUDIT_FORM_ONLY_AUDITOR,
  IMAGE_ERROR,
  IMAGE_ERROR_PICK
} from '../../constants/strings';
import { styles } from './style';

const AuditFormScreen = ({ navigation }: any) => {
  const { role } = useRoleContext();
  const { addAudit } = useAuditContext();
  const [step, setStep] = useState(1);
  const [ratingOptions, setRatingOptions] = useState(ratingOptionsInit);
  const [rating, setRating] = useState<number | null>(null);
  const [checkboxes, setCheckboxes] = useState<boolean[]>(Array(checkboxOptions.length).fill(false));
  const [comments, setComments] = useState('');
  const [image, setImage] = useState<Asset | null>(null);
  const [loading, setLoading] = useState(false);

  if (role !== 'Auditor') {
    return (
      <View style={styles.centered}>
        <Text style={styles.title}>{AUDIT_FORM_ACCESS_DENIED}</Text>
        <Text>{AUDIT_FORM_ONLY_AUDITOR}</Text>
      </View>
    );
  }

  const handleNext = () => setStep((s) => s + 1);
  const handleBack = () => setStep((s) => s - 1);

  const handleCheckbox = (idx: number) => {
    setCheckboxes((prev) => prev.map((v, i) => (i === idx ? !v : v)));
  };

  const handleImagePick = async (from: 'camera' | 'gallery') => {
    const options = { mediaType: 'photo' as MediaType };
    try {
      setLoading(true);
      const result =
        from === 'camera'
          ? await launchCamera(options)
          : await launchImageLibrary(options);
      if (result.assets && result.assets.length > 0) {
        setImage(result.assets[0]);
      }
    } catch (e) {
      Alert.alert(IMAGE_ERROR, IMAGE_ERROR_PICK);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = () => {
    setLoading(true);
    const id = Date.now().toString();
    const audit = {
      id,
      rating,
      checkboxes,
      comments,
      image,
      timestamp: new Date().toISOString(),
      role,
    };
    addAudit(audit);
    setLoading(false);
    navigation.replace('AuditSummary', { id });
  };

  if (loading) return <Loader text={AUDIT_FORM_PROCESSING} />;

  const selectRating = (r: { rate: number; isSelected: boolean }) => {
    let localRating = [...ratingOptions];
    localRating = localRating.map(ele => {
      if (ele.rate <= r.rate) {
        return { ...ele, isSelected: true };
      } else {
        return { ...ele, isSelected: false };
      }
    });
    setRatingOptions(localRating);
    setRating(r.rate);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{AUDIT_FORM_TITLE}</Text>
      {step === 1 && (
        <View style={styles.stepContainer}>
          <Text style={styles.stepTitle}>{AUDIT_FORM_STEP1}</Text>
          <View style={styles.ratingRow}>
            {ratingOptions.map((r) => (
              <TouchableOpacity
                key={r.rate}
                style={[styles.ratingCircle, r.isSelected && styles.ratingSelected]}
                onPress={() => selectRating(r)}
              >
                <Text style={[styles.ratingText, r.isSelected && styles.selectedRatingText]}>{r.rate}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}
      {step === 2 && (
        <View style={styles.stepContainer}>
          <Text style={styles.stepTitle}>{AUDIT_FORM_STEP2}</Text>
          {checkboxOptions.map((label, idx) => (
            <Button
              key={label}
              title={label}
              variant="checkbox"
              selected={checkboxes[idx]}
              onPress={() => handleCheckbox(idx)}
            />
          ))}
        </View>
      )}
      {step === 3 && (
        <View style={styles.stepContainer}>
          <Text style={styles.stepTitle}>{AUDIT_FORM_STEP3}</Text>
          <TextInput
            placeholder={AUDIT_FORM_PLACEHOLDER}
            value={comments}
            onChangeText={setComments}
            multiline
            style={styles.input}
          />
          <View style={styles.imageRow}>
            <Button title={AUDIT_FORM_CAMERA} onPress={() => handleImagePick('camera')} style={styles.imageButton} />
            <Button title={AUDIT_FORM_GALLERY} onPress={() => handleImagePick('gallery')} style={styles.imageButton} />
          </View>
          {image && (
            <Image
              source={{ uri: image.uri }}
              style={styles.preview}
              resizeMode="cover"
            />
          )}
        </View>
      )}
      <View style={styles.buttonRow}>
        {step > 1 && <Button title={AUDIT_FORM_BACK} onPress={handleBack} style={styles.actionButton} />}
        {step < 3 && <Button title={AUDIT_FORM_NEXT} onPress={handleNext} disabled={step === 1 && rating === null} style={styles.actionButton} />}
        {step === 3 && <Button title={AUDIT_FORM_SUBMIT} onPress={handleSubmit} disabled={!comments || !image} style={styles.actionButton} />}
      </View>
    </View>
  );
};



export default AuditFormScreen; 