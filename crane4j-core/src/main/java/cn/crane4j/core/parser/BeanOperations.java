package cn.crane4j.core.parser;

import cn.crane4j.core.executor.BeanOperationExecutor;
import cn.crane4j.core.parser.operation.AssembleOperation;
import cn.crane4j.core.parser.operation.DisassembleOperation;
import cn.crane4j.core.support.Sorted;
import lombok.Getter;

import java.lang.reflect.AnnotatedElement;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

/**
 * <p>The configuration for a JavaBean operation.
 * Typically, it is parsed from a class by the {@link BeanOperationParser},
 * and used in the {@link BeanOperationExecutor} to indicate
 * how the executor should operate on the input object based on the configuration.
 *
 * <p>The obtained operation configuration through {@link #getAssembleOperations} or {@link #getDisassembleOperations}
 * is generally in order, and the order follows the definition of {@link Sorted#getSort}.
 * However, the actual execution order needs to be ensured by the {@link BeanOperationExecutor},
 * hence different executors may lead to different execution orders.
 *
 * <p>Since the configuration may be nested,
 * such as when an attribute type that needs to be disassembled in an object is another object,
 * the object operation configuration instance may still be in recursive resolution when obtained.
 * Therefore, it is essential to ensure that
 * the configuration object has completed resolution through {@link #isActive} before use.
 *
 * @author huangchengxing
 * @see AssembleOperation
 * @see DisassembleOperation
 * @see BeanOperationExecutor
 * @see BeanOperationParser
 */
public interface BeanOperations {

    /**
     * Get an empty bean operations.
     *
     * @return empty bean operations
     */
    static BeanOperations empty() {
        return EmptyBeanOperations.INSTANCE;
    }

    /**
     * Get the source object corresponding to the current operation.
     *
     * @return type
     */
    AnnotatedElement getSource();

    /**
     * Get assembly operations.
     *
     * @return operations
     */
    Collection<AssembleOperation> getAssembleOperations();

    /**
     * Add assembly operation. <br />
     * If the operation has been added, it will be deleted before adding.
     *
     * @param operation operation
     */
    void addAssembleOperations(AssembleOperation operation);

    /**
     * Get disassembly operations.
     *
     * @return operations
     */
    Collection<DisassembleOperation> getDisassembleOperations();

    /**
     * Add disassembly operation. <br />
     * If the operation has been added, it will be deleted before adding.
     *
     * @param operation operation
     */
    void addDisassembleOperations(DisassembleOperation operation);

    /**
     * Whether the current operation configuration is active.
     *
     * @return true if configuration is active, false otherwise
     */
    boolean isActive();

    /**
     * Set the current operation configuration active state.
     *
     * @param active active state
     */
    void setActive(boolean active);
    
    /**
     * Whether the current operation is empty.
     *
     * @return boolean
     */
    default boolean isEmpty() {
        return getAssembleOperations().isEmpty()
            && getDisassembleOperations().isEmpty();
    }

    /**
     * Empty bean operations.
     *
     * @author huangchengxing
     */
    @SuppressWarnings("all")
    @Getter
    class EmptyBeanOperations implements BeanOperations {

        public static final EmptyBeanOperations INSTANCE = new EmptyBeanOperations();

        private final boolean active = true;
        private final boolean empty = true;
        private final AnnotatedElement source = null;
        private final List<AssembleOperation> assembleOperations = Collections.emptyList();
        private final List<DisassembleOperation> disassembleOperations = Collections.emptyList();

        /**
         * Add assembly operation. <br />
         * If the operation has been added, it will be deleted before adding.
         *
         * @param operation operation
         */
        @Override
        public void addAssembleOperations(AssembleOperation operation) {
            throw new UnsupportedOperationException("empty bean operation unsupported add assemble operations");
        }

        /**
         * Add disassembly operation. <br />
         * If the operation has been added, it will be deleted before adding.
         *
         * @param operation operation
         */
        @Override
        public void addDisassembleOperations(DisassembleOperation operation) {
            throw new UnsupportedOperationException("empty bean operation unsupported add disassemble operations");
        }

        /**
         * Set the current operation configuration active state.
         *
         * @param active active state
         */
        @Override
        public void setActive(boolean active) {
            // do nothing
        }
    }
}
