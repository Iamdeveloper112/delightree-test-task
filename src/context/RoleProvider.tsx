import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { getItem, setItem } from '../utils/helper';

export type UserRole = 'Admin' | 'Auditor' | 'Viewer' | null;

interface RoleContextType {
  role: UserRole;
  setRole: (role: UserRole) => void;
}

const RoleContext = createContext<RoleContextType | undefined>(undefined);

export const RoleProvider = ({ children }: { children: ReactNode }) => {
  const [role, setRole] = useState<UserRole>(null);
  return (
    <RoleContext.Provider value={{ role, setRole }}>
      {children}
    </RoleContext.Provider>
  );
};

export const useRoleContext = () => {
  const context = useContext(RoleContext);
  if (!context) {
    throw new Error('useRoleContext must be used within a RoleProvider');
  }
  return context;
};

export interface Audit {
  id: string;
  rating: number | null;
  checkboxes: boolean[];
  comments: string;
  image?: { uri?: string } | null;
  timestamp: string;
  role: UserRole;
}

interface AuditContextType {
  audits: Audit[];
  addAudit: (audit: Audit) => void;
  deleteAudit: (id: string) => void;
  loading: boolean;
}

const AuditContext = createContext<AuditContextType | undefined>(undefined);

const AUDIT_STORAGE_KEY = 'audits';

export const AuditProvider = ({ children }: { children: ReactNode }) => {
  const [audits, setAudits] = useState<Audit[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAudits = async () => {
      setLoading(true);
      const stored = await getItem<Audit[]>(AUDIT_STORAGE_KEY);
      if (stored) {
        setAudits(stored);
      }
      setLoading(false);
    };
    loadAudits();
  }, []);

  useEffect(() => {
    if (!loading) {
      setItem(AUDIT_STORAGE_KEY, audits);
    }
  }, [audits, loading]);

  const addAudit = (audit: Audit) => setAudits((prev) => [audit, ...prev]);
  const deleteAudit = (id: string) => setAudits((prev) => prev.filter((a) => a.id !== id));

  return (
    <AuditContext.Provider value={{ audits, addAudit, deleteAudit, loading }}>
      {children}
    </AuditContext.Provider>
  );
};

export const useAuditContext = () => {
  const context = useContext(AuditContext);
  if (!context) {
    throw new Error('useAuditContext must be used within an AuditProvider');
  }
  return context;
}; 