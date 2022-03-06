import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SectionWrapper = styled.section`
  margin-top: 24px;
  margin-bottom: 8px;

  .section-title {
    color: ${({ theme }) => theme.colors.dark};
    font-size: ${({ theme }) => theme.typographyVariants.sectionTitle.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.sectionTitle.fontWeight};
  }
`;

export default function Section({ title, children }) {
  return (
    <SectionWrapper>
      <h2 className="section-title">{title}</h2>
      {children}
    </SectionWrapper>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
